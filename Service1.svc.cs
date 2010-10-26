using System.ServiceModel.Web;

namespace HelloWCFWorld
{
    using System.ServiceModel;
    using System.ServiceModel.Activation;

    [ServiceContract(Namespace = "HelloWCFWorld")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
#if DEBUG
    [ServiceBehavior(IncludeExceptionDetailInFaults = true)]
#endif

    public class Service1
    {
        // To use HTTP GET, add [WebGet] attribute. (Default ResponseFormat is WebMessageFormat.Json)
        // To create an operation that returns XML,
        //     add [WebGet(ResponseFormat=WebMessageFormat.Xml)],
        //     and include the following line in the operation body:
        //         WebOperationContext.Current.OutgoingResponse.ContentType = "text/xml";
        //[WebGet]
        [OperationContract]
        [WebInvoke(BodyStyle = WebMessageBodyStyle.WrappedRequest, Method = "POST", ResponseFormat = WebMessageFormat.Json)]
        public string Hello(string to)
        {
            // Add your operation implementation here
            return "Hello " + to;
        }

        // Add more operations here and mark them with [OperationContract]
    }
}
