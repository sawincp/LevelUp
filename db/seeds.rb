
puts "🌱 Seeding..."

consoles = [
#   { platform: "Choose Console" },  # 1. Default option
  
  { name: "PlayStation 5",
    logo: "https://en.wikipedia.org/wiki/PlayStation_5#/media/File:PlayStation_5_logo_and_wordmark.svg",
  },  #1
  
  { name: "Xbox Series X",
    logo: "https://en.wikipedia.org/wiki/Xbox_Series_X_and_Series_S#/media/File:Xbox_Series_X_logo.svg" 
  }, #2
  
  { name: "Nintendo Switch",
    logo: "https://en.wikipedia.org/wiki/Nintendo_Switch#/media/File:Nintendo_Switch_logo.svg"
  }, #3
  
  { name: "Super Nintendo",
    logo: "https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System#/media/File:Super_Nintendo_Entertainment_System_logo.svg"
}, #4
  
  { name: "Xbox",
    logo: "https://en.wikipedia.org/wiki/Xbox#/media/File:Xbox_logo_(2019).svg"
  }, #5
  
  { name: "N64",
    logo: "https://en.wikipedia.org/wiki/Nintendo_64#/media/File:Nintendo_64_Logo.svg"
  } #6
]
Console.create(consoles)

# Seed genres with a default placeholder option
genres = [
#   { genre_type: "Choose Genre" },  #1 Default option
  { genre_type: "Action" },        #2
  { genre_type: "Adventure" },     #3
  { genre_type: "Role-Playing" },  #4
  { genre_type: "Side Scroller "},  #5
  { genre_type: "First-Person Shooter"}  #6
]
Genre.create(genres)
  
  # Seed users
  users = [
    { username: "user1", 
      password_digest: BCrypt::Password.create("password1") 
    }, #1
    
    { 
      username: "user2", 
      password_digest: BCrypt::Password.create("password2") 
    }, #2

    { 
      username: "user3", 
      password_digest: BCrypt::Password.create("password3") 
    }, #3

    { 
      username: "user4", 
      password_digest: BCrypt::Password.create("password4") 
    }, #4

  ]
  User.create(users)
  
  # Seed games (referencing existing consoles, genres, and users)
  games = [
    { title: "STARFIELD", 
      cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Bethesda_Starfield.jpg/220px-Bethesda_Starfield.jpg", 
      release_date: Date.new(2022, 2, 25), 
      comment: "Souls-like action RPG", 
      youtubeId: "pYqyVpCV-3c",
      user_id: 1, 
      console_id: 2, 
      genre_id: 4 
    },
    
      { title: "GOD OF WAR RAGNAROK", 
        cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg/220px-God_of_War_Ragnar%C3%B6k_cover.jpg", 
        release_date: Date.new(2022, 11, 9), 
        comment: "Action-adventure sequel", 
        youtubeId: "dIQGI36BxDE",
        user_id: 2, 
        console_id: 1, 
        genre_id: 3 
      },
    
      { title: "THE LEGEND OF ZELDA: BREATH OF THE WILD", 
        cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/220px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg", 
        release_date: Date.new(2023, 3, 3), 
        comment: "Game of the year, no questions asked", 
        youtubeId: "Z6BeAtdoELY",
        user_id: 1, 
        console_id: 3, 
        genre_id: 3 
      }, 

      { title: "SUPER MARIO WORLD", 
        cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Super_Mario_World_Coverart.png/220px-Super_Mario_World_Coverart.png", 
        release_date: Date.new(1991, 8, 23), 
        comment: "Still the best Mario game out there", 
        youtubeId: "88JL-WM_kV0",
        user_id: 3, 
        console_id: 4, 
        genre_id: 5
      },

      { title: "HALO: COMBAT EVOLVED", 
        cover_art: "https://upload.wikimedia.org/wikipedia/en/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg", 
        release_date: Date.new(2001, 11, 15), 
        comment: "Started my love for shooter games!", 
        youtubeId: "v0kHiEME0Vk",
        user_id: 4, 
        console_id: 5, 
        genre_id: 6
      },


      { title: "THE LEGEND OF ZELDA: OCARINA OF TIME", 
        cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg/220px-The_Legend_of_Zelda_Ocarina_of_Time.jpg", 
        release_date: Date.new(1998, 11, 21), 
        comment: "The original and best Zelda game!", 
        youtubeId: "pF7p9hruSeY",
        user_id: 2, 
        console_id: 6, 
        genre_id: 3
      },


  ]
  Game.create(games)

puts "✅ Done seeding!"