class Complement

  def self.of_dna(dna)
    if dna == 'C'
      dna = 'G'
    elsif dna == 'G'
      dna = 'C'
    elsif dna == 'T'
      dna = 'A'
    elsif dna == 'A'
      dna = 'U'
    end
  end
end
