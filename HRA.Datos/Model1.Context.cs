﻿namespace HRA.Datos
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class BBCORE1Entities : DbContext
    {
        public BBCORE1Entities()
            : base("name=BBCORE1Entities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
    
        public virtual ObjectResult<CONSUMO_DETALLE_Result> CONSUMO_DETALLE(string hISTORIA, Nullable<System.DateTime> fINICIO, Nullable<System.DateTime> fFINAL)
        {
            var hISTORIAParameter = hISTORIA != null ?
                new ObjectParameter("HISTORIA", hISTORIA) :
                new ObjectParameter("HISTORIA", typeof(string));
    
            var fINICIOParameter = fINICIO.HasValue ?
                new ObjectParameter("FINICIO", fINICIO) :
                new ObjectParameter("FINICIO", typeof(System.DateTime));
    
            var fFINALParameter = fFINAL.HasValue ?
                new ObjectParameter("FFINAL", fFINAL) :
                new ObjectParameter("FFINAL", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<CONSUMO_DETALLE_Result>("CONSUMO_DETALLE", hISTORIAParameter, fINICIOParameter, fFINALParameter);
        }
    
        public virtual ObjectResult<CONSUMO_DETALLE_RESUMEN_Result> CONSUMO_DETALLE_RESUMEN(string hISTORIA, Nullable<System.DateTime> fINICIO, Nullable<System.DateTime> fFINAL)
        {
            var hISTORIAParameter = hISTORIA != null ?
                new ObjectParameter("HISTORIA", hISTORIA) :
                new ObjectParameter("HISTORIA", typeof(string));
    
            var fINICIOParameter = fINICIO.HasValue ?
                new ObjectParameter("FINICIO", fINICIO) :
                new ObjectParameter("FINICIO", typeof(System.DateTime));
    
            var fFINALParameter = fFINAL.HasValue ?
                new ObjectParameter("FFINAL", fFINAL) :
                new ObjectParameter("FFINAL", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<CONSUMO_DETALLE_RESUMEN_Result>("CONSUMO_DETALLE_RESUMEN", hISTORIAParameter, fINICIOParameter, fFINALParameter);
        }
    
        public virtual ObjectResult<CONSUMO_PACIENTE_Result> CONSUMO_PACIENTE(string hISTORIA)
        {
            var hISTORIAParameter = hISTORIA != null ?
                new ObjectParameter("HISTORIA", hISTORIA) :
                new ObjectParameter("HISTORIA", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<CONSUMO_PACIENTE_Result>("CONSUMO_PACIENTE", hISTORIAParameter);
        }
    
        public virtual ObjectResult<CONSUMO_RESUMEN_DONANTES_Result> CONSUMO_RESUMEN_DONANTES(string hISTORIA, Nullable<System.DateTime> fINICIO, Nullable<System.DateTime> fFINAL)
        {
            var hISTORIAParameter = hISTORIA != null ?
                new ObjectParameter("HISTORIA", hISTORIA) :
                new ObjectParameter("HISTORIA", typeof(string));
    
            var fINICIOParameter = fINICIO.HasValue ?
                new ObjectParameter("FINICIO", fINICIO) :
                new ObjectParameter("FINICIO", typeof(System.DateTime));
    
            var fFINALParameter = fFINAL.HasValue ?
                new ObjectParameter("FFINAL", fFINAL) :
                new ObjectParameter("FFINAL", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<CONSUMO_RESUMEN_DONANTES_Result>("CONSUMO_RESUMEN_DONANTES", hISTORIAParameter, fINICIOParameter, fFINALParameter);
        }
    
        public virtual ObjectResult<ups_DATOS_PACIENTE_Result> ups_DATOS_PACIENTE(string hISTORIA)
        {
            var hISTORIAParameter = hISTORIA != null ?
                new ObjectParameter("HISTORIA", hISTORIA) :
                new ObjectParameter("HISTORIA", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<ups_DATOS_PACIENTE_Result>("ups_DATOS_PACIENTE", hISTORIAParameter);
        }
    
        public virtual ObjectResult<usp_CANDIDATOS_DONACIONES_PACIENTE_Result> usp_CANDIDATOS_DONACIONES_PACIENTE(string hISTORIA)
        {
            var hISTORIAParameter = hISTORIA != null ?
                new ObjectParameter("HISTORIA", hISTORIA) :
                new ObjectParameter("HISTORIA", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_CANDIDATOS_DONACIONES_PACIENTE_Result>("usp_CANDIDATOS_DONACIONES_PACIENTE", hISTORIAParameter);
        }
    
        public virtual ObjectResult<usp_CANT_GLOBULOS_TRANSFUSION_PACIENTE_Result> usp_CANT_GLOBULOS_TRANSFUSION_PACIENTE(string num_procedimiento)
        {
            var num_procedimientoParameter = num_procedimiento != null ?
                new ObjectParameter("num_procedimiento", num_procedimiento) :
                new ObjectParameter("num_procedimiento", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_CANT_GLOBULOS_TRANSFUSION_PACIENTE_Result>("usp_CANT_GLOBULOS_TRANSFUSION_PACIENTE", num_procedimientoParameter);
        }
    
        public virtual ObjectResult<usp_TRANSFUSIONES_PACIENTE_Result> usp_TRANSFUSIONES_PACIENTE(string nUM_PROCEDIMIENTO)
        {
            var nUM_PROCEDIMIENTOParameter = nUM_PROCEDIMIENTO != null ?
                new ObjectParameter("NUM_PROCEDIMIENTO", nUM_PROCEDIMIENTO) :
                new ObjectParameter("NUM_PROCEDIMIENTO", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_TRANSFUSIONES_PACIENTE_Result>("usp_TRANSFUSIONES_PACIENTE", nUM_PROCEDIMIENTOParameter);
        }

        public System.Data.Entity.DbSet<HRA.Datos.ups_DATOS_PACIENTE_Result> ups_DATOS_PACIENTE_Result { get; set; }
    }
}
