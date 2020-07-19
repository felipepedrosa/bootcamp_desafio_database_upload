import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';

import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const foundTransaction = await transactionsRepository.findOne(id);

    if (!foundTransaction) {
      throw new AppError('This transaction does not exists');
    }

    await transactionsRepository.remove(foundTransaction);
  }
}

export default DeleteTransactionService;
