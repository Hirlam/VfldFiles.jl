
# Concatenation  


```@setup vcat
myshow(df) = show(df,truncate=10,show_row_number=false, display_size = (21, 90),maximum_columns_width = 15) 
using VfldFiles, Glob

vfldfiles = glob("vfld*",VfldFiles.MEPS_prod )
vobsfiles = glob("vobs*",VfldFiles.obs )

vfldfile = vfldfiles[1]
vobsfile = vobsfiles[1]
```

To vertically concatenated dataframes use 

```@example vcat
vfld_df = read_v(vfldfile, select=[:ID,:TT])
vobs_df = read_v(vobsfile, select=[:ID,:TT])

df = vcat(vfld_df,vobs_df,cols=:union)
myshow(df) #hide
```


!!! note 
    vobs dataframes have missing values for `leadtime` and `basetime`
