import { Injectable } from '@angular/core';

@Injectable()
export class AuthorserviceService {

  getAuthor(){
    return ["Author1","Author2","Author3","Author4","Author5"]
  }
  
}
