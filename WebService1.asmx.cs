using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace HelloWCFWorld
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]
    public class WebService1 : System.Web.Services.WebService
    {

        [WebMethod]
        public string Hello(string to)
        {
            return "Hello " + to;
        }

        [WebMethod]
        public string Save(int userId, List<IncomeItem> incomeItems)
        {
            //save some stuff or something.
            return "Woohoo";
        }
    }

    //this is just a dummy class for the sample, but think of it as one of your "real" business objects.
    public class IncomeItem
    {
        public int CategoryId { get; set; }
        public string Amount { get; set; }
    }
}
