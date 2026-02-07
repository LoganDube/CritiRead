using System;
using CritiReadApi.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace CritiReadApi.Data;

public class CritiReadDbContext : DbContext
{
    // each property represents a table, creating a new property of DbContext class creates a new table
    public DbSet<Reader> Readers { get; set; }

    public CritiReadDbContext(DbContextOptions<CritiReadDbContext> options) : base(options)
    {

    }


}