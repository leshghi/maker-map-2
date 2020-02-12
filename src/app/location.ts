import { Contact } from './contact';

export class Location {
    constructor(
      public key: string,
      public name: string,
      public resources: string[],
      public filtResources: string[],
      public hourNotes: string,
      public hours: string[],
      public filtHours: string[],
      public access: boolean,
      public accessNotes: string,
      public location: string,
      public accessibility: string,
      public image: string,
      public contact: Contact[],
      public dot: string,
      public dotLocation: string[],
      public nameKey:string
      ) { }
  }