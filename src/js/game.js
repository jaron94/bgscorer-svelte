export class BettingGame {
  constructor(id) {
    this.id = id;
    this.round = 0;
    this.bidStage = true;
    this.players = [];
    this.playerNames = [];
    this.order = [];
    this.trumpOrder = ["&spades;", "&hearts;", "&diams;", "&clubs;", ""];
    this.createdAt = Date.now();
    this.lastSavedAt = this.createdAt;
    this.shortGame = false;
  }

  addPlayer(player) {
    this.players.push(player);
    this.playerNames.push(player.name);
    this.order.push(player.name);
  }

  addPlayers(players) {
    if (this.players.length > 0) {
      throw new Error("Players have already been added.");
    }
    players.forEach((player) => this.addPlayer(player));
    this.nextRound();
  }

  getNumCards() {
    return cardSeq(this.round);
  }

  nextRound() {
    this.order = shiftArray(this.playerNames, this.round);
    this.round++;
  }

  advance() {
    if (!this.bidStage) {
      this.nextRound();
    }
    this.bidStage = !this.bidStage;
  }

  recordBids() {
    if (!this.bidStage) {
      throw new Error("Invalid stage. Bidding stage has ended.");
    }

    let bids = this.players.map((player) => player.input_val);

    if (sumArray(bids) == this.getNumCards()) {
      throw new Error("You are currently exactly bid.");
    }

    this.players.forEach((player, i) => {
      player.recordBid(bids[i]);
    });

    this.advance();
    return this;
  }

  recordTricks() {
    if (this.bidStage) {
      throw new Error("Invalid stage. Scoring stage has not started.");
    }

    let tricks = this.players.map((player) => player.input_val);

    if (sumArray(tricks) != this.getNumCards()) {
      throw new Error(
        "# of tricks declared doesn't equal the total for this round."
      );
    }

    this.players.forEach((player, i) => {
      player.recordNtricks(tricks[i]);
    });

    this.advance();
    return this;
  }

  getPlayerData() {
    let names = this.players.map((p) => p.name);
    let bids = this.players.map((p) => p.bids);
    let tricks = this.players.map((p) => p.ntricks);

    return { names, bids, tricks };
  }

  getPlayerOrder() {
    return this.players.toSorted(
      (a, b) => this.order.indexOf(a.name) - this.order.indexOf(b.name)
    );
  }

  getTrumpSuit() {
    return shiftArray(this.trumpOrder, this.round);
  }
  
  isOver() {
    if (this.shortGame) {
      return this.round == 8;
    } else {
      return this.round == 14;
    }
  }
}

function shiftArray(arr, n = 1) {
  const arrCopy = [...arr];
  const removedElements = arrCopy.splice(0, n);
  return [...arrCopy, ...removedElements];
}

function cardSeq(round, maxCards = 7) {
  const sequence = [...Array(maxCards).keys()]
    .map((i) => maxCards - i)
    .concat([...Array(maxCards - 1).keys()].map((i) => i + 2));
  return sequence[round - 1];
}

function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
