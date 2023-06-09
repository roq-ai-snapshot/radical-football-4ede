import { NoteInterface } from 'interfaces/note';
import { ParentInterface } from 'interfaces/parent';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  name: string;
  user_id: string;
  coach_id?: string;
  status: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  note?: NoteInterface[];
  parent?: ParentInterface[];
  user_player_user_idTouser?: UserInterface;
  user_player_coach_idTouser?: UserInterface;
  _count?: {
    note?: number;
    parent?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  coach_id?: string;
  status?: string;
}
