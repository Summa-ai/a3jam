import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Dictionary } from '../entities/dictionary.entity';
import { AdminDictionaryService } from './admin.service';

@Crud({
  model: {
    type: Dictionary,
  },
})
@Controller('admin/dictionary')
export class AdminDictionaryController implements CrudController<Dictionary> {
  constructor(public service: AdminDictionaryService) {}
}
