const mapping: Record<string, string> = {
  academies: 'academy',
  notes: 'note',
  parents: 'parent',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
