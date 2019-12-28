using Hra.Negocio;
using HRA.Datos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRA.Negocio
{
    public class PoblacionBL : Repositorio<Poblacion>
    {
        public static List<Datos.V_Poblacion> BuscarPaciente(string clave)
        {
            List<HRA.Datos.V_Poblacion> lista = null;
            var cadena = clave.Split(Char.Parse(" "));
            string par1, par2, par3, par4;

            using (var db = new BBCORE1Entities())
            {
                if (cadena.Count() == 1)
                {
                    par1 = cadena[0];
                    lista = db.V_Poblacion.Where(x => x.nombre_completo.Contains(par1))
                            .OrderBy(x => x.nombre_completo).Take(50).ToList();
                }
                if (cadena.Count() == 2)
                {
                    par1 = cadena[0];
                    par2 = cadena[1];
                    lista = db.V_Poblacion.Where(x => x.nombre_completo.Contains(par1) 
                                            && x.nombre_completo.Contains(par2))
                                            .OrderBy(x => x.nombre_completo).Take(50).ToList();
                }
                if (cadena.Count() == 3)
                {
                    par1 = cadena[0];
                    par2 = cadena[1];
                    par3 = cadena[2];
                    lista = db.V_Poblacion.Where(x => x.nombre_completo.Contains(par1)
                                            && x.nombre_completo.Contains(par2)
                                            && x.nombre_completo.Contains(par3))
                                            .OrderBy(x => x.nombre_completo).Take(50).ToList();
                }
                if (cadena.Count() >= 4)
                {
                    par1 = cadena[0];
                    par2 = cadena[1];
                    par3 = cadena[2];
                    par4 = cadena[3];
                    lista = db.V_Poblacion.Where(x => x.nombre_completo.Contains(par1)
                                            && x.nombre_completo.Contains(par2)
                                            && x.nombre_completo.Contains(par3)
                                            && x.nombre_completo.Contains(par4))
                                            .OrderBy(x => x.nombre_completo).Take(50).ToList();
                }
                return lista.ToList();
            }
        }
    }
}
