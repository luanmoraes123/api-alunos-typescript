import {KnexService} from '../../service/knex';
import {Knex} from 'knex'

export default class Aluno{
   db: Knex
   constructor(KnexService: KnexService){
    this.db = KnexService.obterConexao();
   }

   getAll = () => {
    return this.db('aluno').select();
   }

   store = (params: Aluno) => {
    return this.db('aluno').insert(params);
   }
}
