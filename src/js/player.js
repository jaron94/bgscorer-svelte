export class Player {
  constructor(id) {
    this.id = id;
    this.name = "";
    this.avatar = "";
    this.bids = [];
    this.ntricks = [];
  }

  recordBid(bid) {
    this.bids.push(bid);
  }

  recordNtricks(ntricks) {
    this.ntricks.push(ntricks);
  }
}
