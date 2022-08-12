React.useEffect(() => {
store value from url (new fabric code)
check useparams

    (async () => {
      const { data } = await graphqlClient().query({
        query: fetchProductsIDForInvoiceGroup,
        variables: {
          id: id ?? '',
          fetchEntitlementProductIDs: true,
          skip: !id,
        },
        fetchPolicy: 'no-cache',
      });
      const productRecords = data?.invoiceGroup?.products.nodes as Array<InvoiceGroupProduct>;
      let disablePaymentOnTermFlag: Array<InvoiceGroupProduct> = [];
      
    })();
  }, []);