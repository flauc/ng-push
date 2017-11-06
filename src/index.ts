import {NgModule} from '@angular/core';
import {PushNotificationsService} from './services/push-notifications.service';

export * from './services/push-notifications.service';
export * from './interfaces/push-notification.type';

@NgModule({
  providers: [PushNotificationsService],
})
export class PushNotificationsModule {}
