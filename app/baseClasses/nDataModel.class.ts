import { user } from '../src/app/models/user.model';
import { scanned_text } from '../src/app/models/scanned_text.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
scanned_text: scanned_text;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.scanned_text = new scanned_text();
//CREATE NEW DM INSTANCE
    }
}