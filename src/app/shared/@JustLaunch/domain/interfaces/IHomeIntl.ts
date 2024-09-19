export interface IHomeIntl {
  metadata: {
    title: string;
  };
  headings: {
    overview: string;
    recentOrders: string;
  };
  stats: {
    totalRevenue: string;
    avgOrderValue: string;
    ticketsSold: string;
    pageViews: string;
    totalSales: string;
  };
  selectPeriod: {
    placeholder: string;
    options: {
      lastWeek: string;
      lastTwoWeeks: string;
      lastMonth: string;
      lastQuarter: string;
    };
  };
  chart: {
    title: string;
    description: string;
  };
  table: {
    columns: {
      customerName: string;
      amount: string;
      date: string;
    };
  };
}
