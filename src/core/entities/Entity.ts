import { uuid } from "uuidv4";

export abstract class Entity<T> {
  protected _id: string;
  public props: T;

  constructor(props: T, id?: string) {
    this.props = props;

    if (!id) {
      this._id = uuid();
    }
  }
}
