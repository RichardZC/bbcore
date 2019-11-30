namespace HRA.Datos
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public partial class ups_DATOS_PACIENTE_Result
    {
        [Key]
        public string t_doc { get; set; }
        public string num_doc { get; set; }
        public string num_proc { get; set; }
        public string Gh { get; set; }
        public string PACIENTE { get; set; }
    }
}
