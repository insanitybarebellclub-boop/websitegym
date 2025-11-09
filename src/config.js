// Insanity Barebell Club - Configuration
// Replace the Google Drive links below with your actual asset URLs

export const CONFIG = {
  // Brand Information
  brand: {
    name: "Insanity Barebell Club",
    shortName: "Insanity Barebell Club",
    tagline: "Transform Your Body, Transform Your Life"
  },

  // Contact Information
  contact: {
    phone: "+91 123 456 7890",
    email: "info@insanitybarebellclub.com",
    address: "Dindayal nagar,vasai west"
  },

  // Social Media Links
  social: {
    facebook: "https://www.facebook.com/insanitybarebellclub",
    instagram: "https://www.instagram.com/insanitybarebellclub",
    youtube: "https://www.youtube.com/channel/YOUR_CHANNEL_ID",
    twitter: "https://twitter.com/insanitybarbell",
    instagramHandle: "@INSANITYBAREBELLCLUB"
  },

  // Hero Section
  hero: {
    title1: "UNLEASH YOUR",
    title2: "INNER BEAST",
    subtitle: "Join the ultimate fitness revolution. Transform your body and mind with cutting-edge training programs and world-class facilities.",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    background: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
  },

  // Gallery Images
  gallery: [
    "https://images.unsplash.com/photo-1540497077202-7c8a5dee9f50b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=800&h=600&fit=crop"
  ],

  // Mission & Vision
  mission: {
    title: "Our Mission",
    content: [
      "At Insanity Barebell Club, we believe in pushing boundaries and breaking limits. Our mission is to create a community of passionate individuals who strive for excellence in fitness and life.",
      "We provide state-of-the-art facilities, expert coaching, and a motivating environment that empowers you to achieve your goals and become the best version of yourself."
    ]
  },

  vision: {
    title: "Our Vision",
    content: [
      "To become the leading fitness destination that transforms lives through innovative training methods, cutting-edge technology, and unwavering support.",
      "We envision a world where fitness is not just a goal, but a lifestyle that enhances physical health, mental clarity, and overall well-being for everyone in our community."
    ]
  },

  // Trainers
  trainers: [
    {
      name: "John Doe",
      title: "Head Trainer",
      specialty: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop"
    },
    {
      name: "Jane Smith",
      title: "Senior Trainer",
      specialty: "Yoga & Flexibility",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=800&fit=crop"
    },
    {
      name: "Mike Johnson",
      title: "Fitness Coach",
      specialty: "HIIT & Cardio",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&h=800&fit=crop"
    }
  ],

  // Services
  services: {
    title: "Our Services",
    subtitle: "Premium Fitness Experience",
    description: "Experience world-class training with our comprehensive range of fitness services designed to help you achieve your goals.",
    mainImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=1000&fit=crop",
    list: [
      "Personal Training",
      "Group Classes",
      "Nutrition Coaching",
      "Strength Training",
      "Cardio Workouts",
      "Yoga Sessions",
      "Recovery Programs",
      "24/7 Gym Access"
    ]
  },

  // Workout Schedule by Mode
  workoutModes: {
    beginner: {
      name: "Beginner",
      description: "Perfect for those starting their fitness journey",
      color: "#39ff14",
      schedule: {
        monday: {
          focus: "Full Body",
          exercises: ["Bodyweight Squats", "Push-ups", "Plank", "Walking Lunges"],
          duration: "30-40 min",
          sets: "3 sets × 10-12 reps"
        },
        tuesday: {
          focus: "Cardio & Core",
          exercises: ["Light Jogging", "Jumping Jacks", "Bicycle Crunches", "Mountain Climbers"],
          duration: "25-30 min",
          sets: "3 sets × 30 sec"
        },
        wednesday: {
          focus: "Upper Body",
          exercises: ["Dumbbell Press", "Bent Over Rows", "Shoulder Press", "Bicep Curls"],
          duration: "30-40 min",
          sets: "3 sets × 10-12 reps"
        },
        thursday: {
          focus: "Yoga & Flexibility",
          exercises: ["Sun Salutations", "Warrior Poses", "Child's Pose", "Stretching"],
          duration: "30-40 min",
          sets: "Hold 30-60 sec"
        },
        friday: {
          focus: "Lower Body",
          exercises: ["Goblet Squats", "Step-ups", "Leg Press", "Calf Raises"],
          duration: "30-40 min",
          sets: "3 sets × 10-12 reps"
        },
        saturday: {
          focus: "Active Recovery",
          exercises: ["Walking", "Light Swimming", "Stretching", "Foam Rolling"],
          duration: "20-30 min",
          sets: "Low intensity"
        },
        sunday: {
          focus: "Rest Day",
          exercises: ["Complete Rest", "Light Stretching", "Meditation", "Recovery"],
          duration: "Rest",
          sets: "Recovery"
        }
      }
    },
    intermediate: {
      name: "Intermediate",
      description: "Level up your fitness with challenging workouts",
      color: "#00ffff",
      schedule: {
        monday: {
          focus: "Chest & Triceps",
          exercises: ["Barbell Bench Press", "Incline Dumbbell Press", "Dips", "Tricep Extensions"],
          duration: "45-60 min",
          sets: "4 sets × 8-12 reps"
        },
        tuesday: {
          focus: "HIIT Cardio",
          exercises: ["Burpees", "Box Jumps", "Battle Ropes", "Sprint Intervals"],
          duration: "30-40 min",
          sets: "4 sets × 45 sec"
        },
        wednesday: {
          focus: "Back & Biceps",
          exercises: ["Deadlifts", "Pull-ups", "Barbell Rows", "Hammer Curls"],
          duration: "45-60 min",
          sets: "4 sets × 8-12 reps"
        },
        thursday: {
          focus: "Legs & Core",
          exercises: ["Squats", "Romanian Deadlifts", "Leg Press", "Hanging Leg Raises"],
          duration: "50-60 min",
          sets: "4 sets × 10-15 reps"
        },
        friday: {
          focus: "Shoulders & Abs",
          exercises: ["Military Press", "Lateral Raises", "Face Pulls", "Cable Crunches"],
          duration: "45-60 min",
          sets: "4 sets × 10-12 reps"
        },
        saturday: {
          focus: "Full Body Circuit",
          exercises: ["Kettlebell Swings", "Push-ups", "Goblet Squats", "Plank Variations"],
          duration: "40-50 min",
          sets: "5 rounds"
        },
        sunday: {
          focus: "Active Recovery",
          exercises: ["Yoga Flow", "Swimming", "Cycling", "Stretching"],
          duration: "30-40 min",
          sets: "Light activity"
        }
      }
    },
    advanced: {
      name: "Advanced",
      description: "Push your limits with intense training programs",
      color: "#ff1b7e",
      schedule: {
        monday: {
          focus: "Power Chest",
          exercises: ["Heavy Bench Press", "Weighted Dips", "Cable Flyes", "Plyometric Push-ups"],
          duration: "60-75 min",
          sets: "5 sets × 6-10 reps"
        },
        tuesday: {
          focus: "Explosive Legs",
          exercises: ["Heavy Squats", "Front Squats", "Bulgarian Split Squats", "Box Jumps"],
          duration: "60-75 min",
          sets: "5 sets × 6-10 reps"
        },
        wednesday: {
          focus: "Beast Back",
          exercises: ["Heavy Deadlifts", "Weighted Pull-ups", "T-Bar Rows", "Shrugs"],
          duration: "60-75 min",
          sets: "5 sets × 6-10 reps"
        },
        thursday: {
          focus: "CrossFit WOD",
          exercises: ["Olympic Lifts", "Muscle-ups", "Thrusters", "Rope Climbs"],
          duration: "60-90 min",
          sets: "AMRAP"
        },
        friday: {
          focus: "Shoulders & Arms",
          exercises: ["Push Press", "Arnold Press", "Barbell Curls", "Close-grip Bench"],
          duration: "60-75 min",
          sets: "5 sets × 8-12 reps"
        },
        saturday: {
          focus: "Conditioning",
          exercises: ["Sprint Training", "Battle Ropes", "Assault Bike", "Prowler Push"],
          duration: "45-60 min",
          sets: "Intervals"
        },
        sunday: {
          focus: "Active Recovery",
          exercises: ["Mobility Work", "Sauna", "Ice Bath", "Deep Stretching"],
          duration: "30-45 min",
          sets: "Recovery"
        }
      }
    }
  },

  // Blog Posts
  blog: [
    {
      date: "05 Nov",
      title: "Work Hard in Silence, Let Success Make the Noise",
      excerpt: "Discover the power of consistent effort and dedication in achieving your fitness goals without seeking external validation.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      date: "07 Nov",
      title: "Personal Journeys To A Healthier Lifestyle",
      excerpt: "Read inspiring stories from our members who transformed their lives through dedication, hard work, and our supportive community.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      date: "23 Oct",
      title: "Unleash Your Inner Beast At The Gym",
      excerpt: "Learn powerful techniques to tap into your primal strength and push past your limits in every training session.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      date: "13 Dec",
      title: "Latest Trends For Sweating In Style",
      excerpt: "Stay updated with the newest fitness gear, workout trends, and style tips that keep you looking great while training hard.",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a5dee9f50b?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      date: "09 Jan",
      title: "Achieving Mental Clarity At The Gym",
      excerpt: "Explore how physical training enhances mental health, reduces stress, and brings clarity to your daily life.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      link: "#"
    }
  ],

  // Instagram Feed
  instagram: [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1540497077202-7c8a5dee9f50b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=400&fit=crop"
  ]
}

export default CONFIG

