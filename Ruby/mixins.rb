# class Clip
# 	attr_reader :comments

# 	def initialize
# 		@comments = []
# 	end
# 	def add_comment(comment)
# 		comments << comment
# 	end
# 	def play
# 		puts "Playing #{object_id}..."
# 	end
# end

# class Video < Clip
# 	attr_accessor :resolution
# end

# class Song < Clip
# 	attr_accessor :beats_per_minute
# end

# video = Video.new
# video.add_comment("Cool slow motion effect!")
# video.add_comment("Weird ending!")
# song = Song.new
# song.add_comment("Awesome beat.")

# p video.comments, song.comments

module MyModule
	def first_method
		puts "First method called"
	end
	def second_method
		puts "Second method called"
	end
end

class MyClass
	include MyModule
end

my_object = MyClass.new
my_object.first_method
my_object.second_method