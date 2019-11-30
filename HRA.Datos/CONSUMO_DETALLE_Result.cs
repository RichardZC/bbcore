namespace HRA.Datos
{
    using System;
    
    public partial class CONSUMO_DETALLE_Result
    {
        public string UNIDAD { get; set; }
        public string HEMOCOMPONENTE { get; set; }
        public Nullable<short> CANTIDAD { get; set; }
        public Nullable<System.DateTime> COMPATIBILIZADO { get; set; }
        public string ABO { get; set; }
        public Nullable<System.DateTime> SALIDA { get; set; }
        public Nullable<int> po_estado { get; set; }
        public Nullable<int> POBLADOR { get; set; }
        public Nullable<short> u_estado { get; set; }
        public int po_id { get; set; }
        public string SELLO { get; set; }
        public Nullable<int> u_hem_id { get; set; }
    }
}
