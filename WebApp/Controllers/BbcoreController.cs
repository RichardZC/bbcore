using HRA.Negocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApp.Controllers
{
    public class BbcoreController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult BuscarPaciente(string clave)
        {
            return Json(PoblacionBL.BuscarPaciente(clave), JsonRequestBehavior.AllowGet);
        }

    }
}