export interface PageModel {
  relationship: Relationship;
  summary: Summary;
}

export interface Summary {
  groupingLookupRef: GroupingLookupRef[];
  incomeTypes: IncomeType[];
  relationshipTotal: RelationshipTotal[];
}

export interface RelationshipTotal {
  periodCode: string;
  periodLabel: string;
  results: Result;
}

export interface IncomeType {
  typeCode: string;
  typeName: string;
  groups: Group[];
}

export interface Group {
  periods: Period[];
  groupCode: string;
  groupLabel: string;
}

export interface Period {
  periodCode: string;
  periodLabel: string;
  results: Result;
  classes?: string;
}

export interface Result {
  revenue?: number;
  roe?: number;
}

export interface GroupingLookupRef {
  id: number;
  code: string;
  name: string;
}

export interface Relationship {
  id: string;
  name: string;
  children: Child[];
}

export interface Child {
  id: string;
  name: string;
}
