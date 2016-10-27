export class User {
  constructor(public nickName: string, 
              public password: string, 
              public userType?: string, 
              public firstName?: string, 
              public lastName?: string,
              public email?: string, 
              public contestsWon?: number, 
              public designsCreated?: number, 
              public publicDesigns?: number) {}
}