import { getRepository } from 'typeorm';

import Category from '../models/Category';

export default class CreateCategoryService {
  public async execute(title: string): Promise<Category> {
    const categoriesRepository = getRepository(Category);

    let category = await categoriesRepository.findOne({ where: { title } });

    if (!category) {
      category = categoriesRepository.create({ title });
      category = await categoriesRepository.save(category);

      return category;
    }

    return category;
  }
}
