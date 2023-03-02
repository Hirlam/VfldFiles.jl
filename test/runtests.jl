

using Test, DataFrames, VfldFiles, Glob


@testset "vfld" begin

    vfldfiles = glob("vfld*",MEPS_prod)
    df = read_v(vfldfiles[1],select=[:ID,:TT])

    @test df[1,:TT] == 268.0182
    @test all(df[:,:exp] .== "MEPS_prod")

end 



@testset "vobs" begin

    vobsfiles = glob("vobs*",obs)

    df = read_v(vobsfiles[1],select=[:ID,:TT])
    
    @test df[1,:TT] == 269.6
    @test all(df[:,:exp] .== "obs")

end
