export class GetUserRequest {
    constructor(public readonly userId: string) {}
  
    toString() {
      console.log(this.userId);
      return JSON.stringify({
        userId: this.userId,
      });
    }
  }