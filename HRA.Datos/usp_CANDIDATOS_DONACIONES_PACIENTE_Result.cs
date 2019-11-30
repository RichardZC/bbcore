namespace HRA.Datos
{
    using System;
    
    public partial class usp_CANDIDATOS_DONACIONES_PACIENTE_Result
    {
        public string CANDIDATO { get; set; }
        public string N_PRE_DON { get; set; }
        public string UNIDAD { get; set; }
        public Nullable<System.DateTime> FECHA { get; set; }
        public string ESTADO { get; set; }
    }
}
