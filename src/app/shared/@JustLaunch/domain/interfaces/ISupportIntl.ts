export interface ISupportIntl {
  metadata: {
    title: string;
  };
  emptyState: {
    title: string;
    description: string;
    newTicketButton: string;
  };
  form: {
    title: string;
    labels: {
      title: string;
      category: string;
      description: string;
    };
    buttons: {
      cancel: string;
      create: string;
    };
    categories: {
      general: string;
      technical: string;
      billing: string;
      feature: string;
    };
  };
  table: {
    columns: {
      title: string;
      category: string;
      status: string;
      createdAt: string;
    };
    status: {
      open: string;
      closed: string;
    };
  };
}
