import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class scanned_text {
  @JsonProperty('text', String, true)
  public text: string = undefined;

}