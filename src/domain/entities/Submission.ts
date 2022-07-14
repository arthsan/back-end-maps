import { Entity } from "../../core/entities/Entity";

type SubmissionProps = {
  addresses: string[];
};

export class Submission extends Entity<SubmissionProps> {
  private constructor(props?: SubmissionProps, id?: string) {
    super(props, id);
  }

  static create(props: SubmissionProps, id?: string) {
    const submission = new Submission(props, id);

    return submission;
  }
}
