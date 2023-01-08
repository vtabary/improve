import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  EmotionsService,
  IEmotion,
  IJob,
  JobsService,
} from '../../../database/public-api';
import { random } from '../../../shared/helpers/random';

@Component({
  selector: 'improve-role-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomComponent {
  /**
   * @internal
   */
  public emotion?: IEmotion;
  /**
   * @internal
   */
  public job?: IJob;

  constructor(private emotions: EmotionsService, private jobs: JobsService) {
    this.generate();
  }

  /**
   * @internal
   */
  public generate(): void {
    this.emotion = random(this.emotions.list());
    this.job = random(this.jobs.list());
  }
}
