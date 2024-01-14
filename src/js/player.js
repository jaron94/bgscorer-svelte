export class Player {
  constructor(id) {
    this.id = id;
    this.name = "";
    this.avatar = "";
    this.bids = [];
    this.ntricks = [];
    this.scores = [];
    this.cumulativeScores = [];
    this.input_val = 0;
  }

  recordBid(bid) {
    this.bids.push(bid);
  }

  recordNtricks(ntricks) {
    this.ntricks.push(ntricks);
    this.scores.push(calcScore(this.bids.slice(-1)[0], ntricks));
    this.cumulativeScores.push(
      this.scores.slice(-1)[0] + (this.cumulativeScores.slice(-1)[0] || 0)
    );
  }
}

function calcScore(bid, ntricks) {
  return bid + (ntricks == bid) ? 10 : 0;
}
