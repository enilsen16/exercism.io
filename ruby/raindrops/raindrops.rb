class Raindrops
  def self.convert(number)
    answer = ""
    if number % 3 == 0
      answer << "Pling"
    elsif number % 5 == 0
      answer << "Plang"
    elsif number % 7 == 0
      answer << "Plong"
    else
      answer = number.to_s
    end
      answer
  end
end
