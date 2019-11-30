namespace HRA.Datos
{
    using System;
    
    public partial class usp_TRANSFUSIONES_PACIENTE_Result
    {
        public string UNIDAD { get; set; }
        public string COMP { get; set; }
        public string PREDON { get; set; }
        public Nullable<short> CANTIDAD { get; set; }
        public Nullable<System.DateTime> F_COMPATIBILIDAD { get; set; }
        public string GF { get; set; }
        public string UNIDAD2 { get; set; }
        public Nullable<System.DateTime> F_TRANSFUSION { get; set; }
    }
}
