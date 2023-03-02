# Inner joins 


```@setup 2
myshow(df) = show(df,truncate=10,show_row_number=false, display_size = (21, 90),maximum_columns_width = 15) 
```

```@example 2
using VfldFiles, Glob, DataFrames

vobsfiles = glob("vobs*",VfldFiles.obs)
vfldfiles = glob("vfld*",VfldFiles.MEPS_prod)
nothing #hide
```

```@example 2 
vobs_df = reduce(vcat, read_v.(vobsfiles,select=[:ID, :TT]))
vfld_df = reduce(vcat, read_v.(vfldfiles,select=[:ID, :TT])) 
nothing #hide
```

```@example 2
df = innerjoin(vfld_df,vobs_df,on=[:ID,:validtime],makeunique=true)
myshow(df)  #hide
```
