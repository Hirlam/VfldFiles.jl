# Creating Sqlite databases

```julia
using Sqlite
db = SQLite.DB()
read_v(file) |> SQLite.load!(db, "synop")
```

