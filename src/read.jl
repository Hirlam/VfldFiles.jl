


function read_v(fname::AbstractString; select=[])

    io = open(fname)
    nt = read_header(io)
    df = read_synop(io; select=select, nt...)

    # continue reading TEMP here 

    close(io)

    
    insertcols4df!(df,fname) 


    return df
end



function read_header(io::IO)
     
     n_synop, n_temp, version = parse.(Int, split(readline(io)))
     @assert version == 4

     nvar_synop = parse(Int, readline(io))
     
     varnames = [Symbol(split(readline(io))[1]) for i = 1:nvar_synop]  
     index = [:ID, :LAT, :LON, :FI]   
     header = union(index, varnames)   # union will remove :FI in varnames for vfld files
     types = [Int; fill(Float64, length(header)-1)]
      
     return (;n_synop=n_synop, n_temp=n_temp, header=header, types=types)

end 


function read_synop(io::IO; select=[], n_synop, header, types, kwarg...)
    
    # Single threaded (ntasks=1) needed because of limit=n_synop

    return CSV.read(io,
        DataFrame,
        types=types, 
        limit=n_synop,
        header=header,
        delim=' ',
        ignorerepeated=true,
        missingstring=["-99.0000E+00","-99"],
        ntasks=1,            
        ignoreemptyrows=false,
        select=select
    )

end


splitfilename(fname) = match(r"(vobs|vfld)(.*?)(mbr\d{3})?(\d{10})(\d{2})?", fname)  


function insertcols4df!(df,fname)

    type, exp, mbr, datetime, lt = splitfilename(basename(fname))

    datetime = DateTime(datetime,dateformat"yyyymmddHH")

    # Set leadtime=missing for vfld analysis files and vobs files 
    leadtime  = isnothing(lt) ? missing  : Hour(parse(Int,lt))
    
    validtime = ismissing(leadtime) ? datetime : datetime + leadtime                           
    
    if type == "vobs"     
        insertcols!(df, 1, :exp       => "obs") 
        insertcols!(df, 1, :validtime => datetime) 
    elseif type == "vfld"
        insertcols!(df, 1, :exp       => string(exp)) 
        insertcols!(df, 1, :mbr       => string(mbr))  
        insertcols!(df, 1, :basetime  => datetime)
        insertcols!(df, 1, :leadtime  => leadtime)
        insertcols!(df, 1, :validtime => validtime)     
    end 

end 

