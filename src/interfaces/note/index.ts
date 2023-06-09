import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface NoteInterface {
  id?: string;
  content: string;
  player_id: string;
  coach_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  player?: PlayerInterface;
  user?: UserInterface;
  _count?: {};
}

export interface NoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  player_id?: string;
  coach_id?: string;
}
