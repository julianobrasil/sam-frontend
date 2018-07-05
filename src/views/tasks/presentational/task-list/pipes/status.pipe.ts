import {Pipe, PipeTransform} from '@angular/core';
import {TaskStatus, TaskStatusOptions} from '../../../../../model/types';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(status: TaskStatus, args?: any): string {
    switch (status) {
      case TaskStatusOptions.CONCLUIDA:
        return 'Concluída';

      case TaskStatusOptions.ACEITA:
        return 'Aceita';

      case TaskStatusOptions.RECUSADA:
        return 'Recusada';
    }
  }
}
