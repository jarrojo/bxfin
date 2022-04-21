import { Observable, of } from 'rxjs';
import { Header } from './header.model';
import { PageModel } from './pagemodel.model';

export const MOCK_HEADERS: Observable<Header[]> = of([
  { header: 'Total revenue', value: 400000 },
  { header: 'Credits', value: 200000 },
  { header: 'Deposit', value: 120000 },
  { header: 'Services', value: 80000 },
]);

export const MOCK_PAGEMODEL: Observable<PageModel> = of({
  relationship: {
    id: 'd0ae88e7-4b9b-4667-9085-08d85dc8b294',
    name: 'Alpha Consulting',
    children: [
      {
        id: '0b5c9b47-b54a-4eb3-fd6e-08d88537e8fa',
        name: 'Client - 1',
      },
      {
        id: '643099ae-7a09-406f-fd6f-08d88537e8fa',
        name: 'Client - 2',
      },
      {
        id: '91da372d-44cf-42a2-f943-08d979856b5b',
        name: 'Client - 3',
      },
    ],
  },
  summary: {
    groupingLookupRef: [
      {
        id: 2780,
        code: 'loan',
        name: 'Commercial Lending',
      },
      {
        id: 2777,
        code: 'trade',
        name: 'Trade Solutions',
      },
      {
        id: 2776,
        code: 'asset-fin',
        name: 'Asset Finance',
      },
      {
        id: 2779,
        code: 'deposit',
        name: 'Deposit',
      },
      {
        id: 2778,
        code: 'service',
        name: 'Transaction Banking',
      },
      {
        id: 2773,
        code: 'fin-mkts',
        name: 'Financial Markets',
      },
      {
        id: 2775,
        code: 'wealth-mgmt',
        name: 'Wealth Management',
      },
      {
        id: 2772,
        code: 'corp-fin',
        name: 'Corporate Finance (Non-Lending)',
      },
      {
        id: 2774,
        code: 'asset-mgmt',
        name: 'Asset Management',
      },
    ],
    incomeTypes: [
      {
        typeCode: 'relationshipIncome',
        typeName: 'Relationship Income',
        groups: [
          {
            periods: [
              {
                periodCode: '2020',
                periodLabel: '2020',
                results: {},
              },
              {
                periodCode: '2021',
                periodLabel: 'YTD(2021)',
                results: {},
                classes: 'historical',
              },
              {
                periodCode: '2021forecast',
                periodLabel: '2021',
                results: {
                  revenue: 43739.43661974,
                  roe: 1.1548447510345,
                },
              },
              {
                periodCode: '2022forecast',
                periodLabel: '2022',
                results: {
                  revenue: 57308.2942098,
                  roe: 1.381645364368753,
                },
                classes: 'forecast1',
              },
              {
                periodCode: 'lifetime',
                periodLabel: 'Lifetime',
                results: {
                  revenue: 101047.73082954,
                  roe: 1.274261144026549,
                },
              },
            ],
            groupCode: 'loan',
            groupLabel: 'Commercial Lending',
          },
          {
            periods: [
              {
                periodCode: '2020',
                periodLabel: '2020',
                results: {
                  revenue: 20040.0,
                  roe: 0.299961604088435,
                },
              },
              {
                periodCode: '2021',
                periodLabel: 'YTD(2021)',
                results: {
                  revenue: 7360.0,
                  roe: 0.199183828015913,
                },
              },
              {
                periodCode: '2021forecast',
                periodLabel: '2021',
                results: {
                  revenue: 3036.27272727,
                  roe: 0.231467233386988,
                },
              },
              {
                periodCode: '2022forecast',
                periodLabel: '2022',
                results: {
                  revenue: 12145.09090908,
                  roe: 0.231467233386988,
                },
              },
              {
                periodCode: 'lifetime',
                periodLabel: 'Lifetime',
                results: {
                  revenue: 60725.4545454,
                  roe: 0.231467233386988,
                },
              },
            ],
            groupCode: 'trade',
            groupLabel: 'Trade Solutions',
          },
          {
            periods: [
              {
                periodCode: '2020',
                periodLabel: '2020',
                results: {
                  revenue: 20040.0,
                  roe: 0.291174095645539,
                },
              },
              {
                periodCode: '2021',
                periodLabel: 'YTD(2021)',
                results: {
                  revenue: 14640.0,
                  roe: 0.195247032806552,
                },
              },
              {
                periodCode: '2021forecast',
                periodLabel: '2021',
                results: {
                  revenue: 4287.27272727,
                  roe: 0.212682702572442,
                },
              },
              {
                periodCode: '2022forecast',
                periodLabel: '2022',
                results: {
                  revenue: 17149.09090908,
                  roe: 0.212682702572442,
                },
              },
              {
                periodCode: 'lifetime',
                periodLabel: 'Lifetime',
                results: {
                  revenue: 85745.4545454,
                  roe: 0.212682702572442,
                },
              },
            ],
            groupCode: 'asset-fin',
            groupLabel: 'Asset Finance',
          },
          {
            periods: [
              {
                periodCode: '2020',
                periodLabel: '2020',
                results: {},
              },
              {
                periodCode: '2021',
                periodLabel: 'YTD(2021)',
                results: {},
                classes: 'historical',
              },
              {
                periodCode: '2021forecast',
                periodLabel: '2021',
                results: {
                  revenue: 3010.56338028,
                },
              },
              {
                periodCode: '2022forecast',
                periodLabel: '2022',
                results: {
                  revenue: 3609.15492956,
                },
              },
              {
                periodCode: 'lifetime',
                periodLabel: 'Lifetime',
                results: {
                  revenue: 6619.71830984,
                },
              },
            ],
            groupCode: 'deposit',
            groupLabel: 'Deposit',
          },
          {
            periods: [
              {
                periodCode: '2020',
                periodLabel: '2020',
                results: {
                  revenue: 25080.0,
                  roe: 0.319619465705684,
                },
                classes: 'historical',
              },
              {
                periodCode: '2021',
                periodLabel: 'YTD(2021)',
                results: {
                  revenue: 14640.0,
                  roe: 0.213176498793976,
                },
              },
              {
                periodCode: '2021forecast',
                periodLabel: '2021',
                results: {},
              },
              {
                periodCode: '2022forecast',
                periodLabel: '2022',
                results: {},
              },
              {
                periodCode: 'lifetime',
                periodLabel: 'Lifetime',
                results: {},
              },
            ],
            groupCode: 'service',
            groupLabel: 'Transaction Banking',
          },
          {
            periods: [
              {
                periodCode: '2020',
                periodLabel: '2020',
                results: {
                  revenue: 15000.0,
                  roe: 0.312478593274622,
                },
              },
              {
                periodCode: '2021',
                periodLabel: 'YTD(2021)',
                results: {
                  revenue: 3680.0,
                  roe: 0.203752184838854,
                },
              },
              {
                periodCode: '2021forecast',
                periodLabel: '2021',
                results: {
                  revenue: 1418.45454546,
                  roe: 0.24742803185405,
                },
              },
              {
                periodCode: '2022forecast',
                periodLabel: '2022',
                results: {
                  revenue: 5673.81818184,
                  roe: 0.24742803185405,
                },
              },
              {
                periodCode: 'lifetime',
                periodLabel: 'Lifetime',
                results: {
                  revenue: 11347.63636368,
                  roe: 0.24742803185405,
                },
              },
            ],
            groupCode: 'fin-mkts',
            groupLabel: 'Financial Markets',
          },
          {
            periods: [
              {
                periodCode: '2020',
                periodLabel: '2020',
                results: {},
              },
              {
                periodCode: '2021',
                periodLabel: 'YTD(2021)',
                results: {},
              },
              {
                periodCode: '2021forecast',
                periodLabel: '2021',
                results: {},
              },
              {
                periodCode: '2022forecast',
                periodLabel: '2022',
                results: {},
              },
              {
                periodCode: 'lifetime',
                periodLabel: 'Lifetime',
                results: {},
              },
            ],
            groupCode: 'wealth-mgmt',
            groupLabel: 'Wealth Management',
          },
          {
            periods: [
              {
                periodCode: '2020',
                periodLabel: '2020',
                results: {},
              },
              {
                periodCode: '2021',
                periodLabel: 'YTD(2021)',
                results: {},
              },
              {
                periodCode: '2021forecast',
                periodLabel: '2021',
                results: {},
              },
              {
                periodCode: '2022forecast',
                periodLabel: '2022',
                results: {},
              },
              {
                periodCode: 'lifetime',
                periodLabel: 'Lifetime',
                results: {},
              },
            ],
            groupCode: 'corp-fin',
            groupLabel: 'Corporate Finance (Non-Lending)',
          },
          {
            periods: [
              {
                periodCode: '2020',
                periodLabel: '2020',
                results: {},
              },
              {
                periodCode: '2021',
                periodLabel: 'YTD(2021)',
                results: {},
              },
              {
                periodCode: '2021forecast',
                periodLabel: '2021',
                results: {},
              },
              {
                periodCode: '2022forecast',
                periodLabel: '2022',
                results: {},
              },
              {
                periodCode: 'lifetime',
                periodLabel: 'Lifetime',
                results: {},
              },
            ],
            groupCode: 'asset-mgmt',
            groupLabel: 'Asset Management',
          },
        ],
      },
    ],
    relationshipTotal: [
      {
        periodCode: '2020',
        periodLabel: '2020',
        results: {
          revenue: 80160.0,
          roe: 0.305831685097275,
        },
      },
      {
        periodCode: '2021',
        periodLabel: 'YTD',
        results: {
          revenue: 40320.0,
          roe: 0.202950260584413,
        },
      },
      {
        periodCode: '2021forecast',
        periodLabel: '2021',
        results: {
          revenue: 55492.00000002,
          roe: 0.669745750500669,
        },
      },
      {
        periodCode: '2022forecast',
        periodLabel: '2022',
        results: {
          revenue: 95885.44913936,
          roe: 0.456331344477291,
        },
      },
      {
        periodCode: 'lifetime',
        periodLabel: 'Lifetime',
        results: {
          revenue: 265485.99459386,
          roe: 0.321293275494403,
        },
      },
    ],
  },
});
