﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RestDDD.Domain.Entities;
using System;
using System.Linq;

namespace RestDDD.Infraestructure.Data
{
   public class SqlContext : IdentityDbContext/*: DbContext*/
    {
        public SqlContext(){}

        public SqlContext(DbContextOptions<SqlContext> options) : base(options){}

        public DbSet<Contato> Contatos { get; set; }

        public DbSet<Usuario> Usuario { get; set; }

        public override int SaveChanges()
        {
            foreach (var entry in ChangeTracker.Entries<Contato>().Where(entry => entry.Entity.GetType().GetProperty("DataCadastro") != null))
            {
                if (entry.State == EntityState.Added)
                {
                    entry.Property("DataCadastro").CurrentValue = DateTime.Now;
                    entry.Property("DataAlteracao").CurrentValue = DateTime.Now;
                    entry.Property("IsActive").CurrentValue = true;
                }

                if (entry.State == EntityState.Modified)
                {
                    entry.Property("DataCadastro").IsModified = false;
                    entry.Property("DataAlteracao").CurrentValue = DateTime.Now;
                }
            }

            return base.SaveChanges();
        }
    }
}
