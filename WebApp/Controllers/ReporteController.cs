using HRA.Negocio;
using Microsoft.Reporting.WebForms;
using Microsoft.Reporting.WinForms;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApp.Controllers
{
    public class ReporteController : Controller
    {
        public ActionResult ListarProcedimientos_Por_Unidad(string Und)
        {
            var lista = ReporteBL.ListarProc_HC_Por_Unidad(Und);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        public ActionResult ListarProcedimiento(string pHc)
        {
            var lista = ReporteBL.ListarDatosPaciente(pHc);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        public ActionResult ListarCandidatos(string pHc)
        {
            var lista = ReporteBL.ObtenerCandidatos(pHc);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        public ActionResult ReporteMovimientoBbCore2(string proc, string hc)
        {
            var pacientes = ReporteBL.ListarDatosPaciente(hc);
            var ObtenerGlobTransf = ReporteBL.ObtenerGlobTransf(proc);
            var ObtenerTransfPacient = ReporteBL.ObtenerTransfPacient(proc);
            var ObtenerCandidatos = ReporteBL.ObtenerCandidatos(hc);
            var rd = new ReportDataSource("dsTransfu", ObtenerTransfPacient);
            var rd1 = new ReportDataSource("dsCandidato", ObtenerCandidatos);

            var parametros = new List<ReportParameter>
               {
                   new ReportParameter("t_doc", pacientes.Count>0? pacientes[0].t_doc:" "),
                   new ReportParameter("num_doc", pacientes.Count>0? pacientes[0].num_doc:" "),
                     new ReportParameter("num_proc",  proc=="0"?" ":proc),
                   new ReportParameter("Gh", pacientes.Count>0?pacientes[0].Gh:" "),
                   new ReportParameter("PACIENTE", pacientes.Count>0?pacientes[0].PACIENTE:" "),
                   new ReportParameter("GLOBULOS", ObtenerGlobTransf.Count >0? ObtenerGlobTransf[0].GLOBULOS.Value.ToString():"0"),
                   new ReportParameter("TRANSFUSION",ObtenerGlobTransf.Count >0? ObtenerGlobTransf[0].TRANSFUSION.Value.ToString():"0"),
                   new ReportParameter("Fecha", DateTime.Now.ToShortDateString())

           };
            return Reporte("PDF", "RptTransfusionBbCore.rdlc", rd, "A4Vertical0.25", parametros, rd1);
        }
        public ActionResult Reporte(string pTipoReporte, string rdlc, ReportDataSource rds, string pPapel, List<ReportParameter> pParametros = null, ReportDataSource rds1 = null)
        {
            var lr = new LocalReport();
            lr.ReportPath = Path.Combine(Server.MapPath("~/Reporte"), rdlc);

            if (rds != null) lr.DataSources.Add(rds);
            if (rds1 != null) lr.DataSources.Add(rds1);
            if (pParametros != null) lr.SetParameters(pParametros);

            string reportType = pTipoReporte;
            string mimeType = string.Empty;
            string encoding;
            string fileNameExtension;

            var deviceInfo = ObtenerPapel(pPapel).Replace("[TipoReporte]", pTipoReporte);
            Warning[] warnings;
            string[] streams;
            byte[] renderedBytes = null;
            try
            {
                renderedBytes = lr.Render(reportType, deviceInfo, out mimeType, out encoding,
                                                            out fileNameExtension, out streams, out warnings);
            }
            catch (Exception)
            {
            }
            return File(renderedBytes, mimeType);
        }
        private static string ObtenerPapel(string pPapel)
        {
            switch (pPapel)
            {
                case "A4Horizontal":
                    return "<DeviceInfo>" +
                           "  <OutputFormat>[TipoReporte]</OutputFormat>" +
                           "  <PageWidth>11in</PageWidth>" +
                           "  <PageHeight>8.5in</PageHeight>" +
                           "  <MarginTop>0in</MarginTop>" +
                           "  <MarginLeft>0in</MarginLeft>" +
                           "  <MarginRight>0in</MarginRight>" +
                           "  <MarginBottom>0in</MarginBottom>" +
                           "</DeviceInfo>";
                case "A4Vertical":
                    return "<DeviceInfo>" +
                           "  <OutputFormat>[TipoReporte]</OutputFormat>" +
                           "  <PageWidth>8.5in</PageWidth>" +
                           "  <PageHeight>11in</PageHeight>" +
                           "  <MarginTop>0in</MarginTop>" +
                           "  <MarginLeft>0in</MarginLeft>" +
                           "  <MarginRight>0in</MarginRight>" +
                           "  <MarginBottom>0in</MarginBottom>" +
                           "</DeviceInfo>";
                case "A4Horizontal0.25":
                    return "<DeviceInfo>" +
                           "  <OutputFormat>[TipoReporte]</OutputFormat>" +
                           "  <PageWidth>11in</PageWidth>" +
                           "  <PageHeight>8.5in</PageHeight>" +
                           "  <MarginTop>0.25in</MarginTop>" +
                           "  <MarginLeft>0.25in</MarginLeft>" +
                           "  <MarginRight>0.25in</MarginRight>" +
                           "  <MarginBottom>0.25in</MarginBottom>" +
                           "</DeviceInfo>";
                case "A4Vertical0.25":
                    return "<DeviceInfo>" +
                           "  <OutputFormat>[TipoReporte]</OutputFormat>" +
                           "  <PageWidth>8.5in</PageWidth>" +
                           "  <PageHeight>11in</PageHeight>" +
                           "  <MarginTop>0.25in</MarginTop>" +
                           "  <MarginLeft>0.25in</MarginLeft>" +
                           "  <MarginRight>0.25in</MarginRight>" +
                           "  <MarginBottom>0.25in</MarginBottom>" +
                           "</DeviceInfo>";
                case "TicketCaja":
                    return "<DeviceInfo>" +
                           "  <OutputFormat>[TipoReporte]</OutputFormat>" +
                           "  <PageWidth>3.5in</PageWidth>" +
                           "  <PageHeight>5.0in</PageHeight>" +
                           "  <MarginTop>0in</MarginTop>" +
                           "  <MarginLeft>0.1in</MarginLeft>" +
                           "  <MarginRight>0in</MarginRight>" +
                           "  <MarginBottom>0in</MarginBottom>" +
                           "</DeviceInfo>";
                case "VoucherCaja":
                    return "<DeviceInfo>" +
                           "  <OutputFormat>[TipoReporte]</OutputFormat>" +
                           "  <PageWidth>8.5in</PageWidth>" +
                           "  <PageHeight>11in</PageHeight>" +
                           "  <MarginTop>0in</MarginTop>" +
                           "  <MarginLeft>0in</MarginLeft>" +
                           "  <MarginRight>0in</MarginRight>" +
                           "  <MarginBottom>0in</MarginBottom>" +
                           "</DeviceInfo>";
                case "CodigoBarras":
                    return "<DeviceInfo>" +
                           "  <OutputFormat>[TipoReporte]</OutputFormat>" +
                           "  <PageWidth>4.13in</PageWidth>" +
                           "  <PageHeight>2.76in</PageHeight>" +
                           "  <MarginTop>0in</MarginTop>" +
                           "  <MarginLeft>0in</MarginLeft>" +
                           "  <MarginRight>0in</MarginRight>" +
                           "  <MarginBottom>0in</MarginBottom>" +
                           "</DeviceInfo>";

            }

            return "<DeviceInfo>" +
                   "  <OutputFormat>[TipoReporte]</OutputFormat>" +
                   "  <PageWidth>8.5in</PageWidth>" +
                   "  <PageHeight>11in</PageHeight>" +
                   "  <MarginTop>0in</MarginTop>" +
                   "  <MarginLeft>0in</MarginLeft>" +
                   "  <MarginRight>0in</MarginRight>" +
                   "  <MarginBottom>0in</MarginBottom>" +
                   "</DeviceInfo>";
        }
    }
}