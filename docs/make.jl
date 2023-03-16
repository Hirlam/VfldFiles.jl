using Documenter, VfldFiles


format = Documenter.HTML(
             prettyurls = get(ENV, "CI", nothing) == "true",
             analytics = "G-28HZH6GXHN"
         ) 



makedocs(
    sitename = "VfldFiles",
    format = format,
    pages = [
       #  "index.md"
        "install.md"
        "read.md"
        "innerjoin.md"
        "vcat.md"
        #"sqlite.md"
        #"plotting.md"
        "multithreading.md"
        "distributed.md"
        "tarballs.md"
    ] 
)

deploydocs(repo = "github.com/Hirlam/VfldFiles.jl.git")
