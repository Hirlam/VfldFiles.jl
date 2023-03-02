# Inner joins 



```@setup 2 

myshow(df) = show(df,truncate=10,show_row_number=false, display_size = (21, 90),maximum_columns_width = 15) 

using VfldFiles, Glob, DataFrames

vobsfiles = "assets/vfldMEPS_prodmbr000201902170027"
vfldfiles = "assets/vobs2019022015"
nothing #hide
```

```@example 2 
vobs_df =  read_v(vobsfiles,select=[:ID, :TT])
vfld_df =  read_v(vfldfiles,select=[:ID, :TT]) 
nothing #hide
```

```@example 2
df = innerjoin(vfld_df,vobs_df,on=[:ID,:validtime],makeunique=true)
myshow(df)  #hide
```
