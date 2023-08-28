Feature: Search films

  In order to find Star Wars films
  As a fan
  I want to search them
  
  Scenario: Search by term
    When I search by "luke"
    Then I should see the following films:
      | title                   | episode | release    |
      | A New Hope              | 4       | 25-05-1977 |
      | The Empire Strikes Back | 5       | 17-05-1980 |
      | Return of the Jedi      | 6       | 25-05-1983 |
      | Revenge of the Sith     | 3       | 19-05-2005 |

  Scenario: Search by terms
    When I search by "luke tatooine"
    Then I should see the following films:
      | title                   | episode | release    |
      | A New Hope              | 4       | 25-05-1977 |
      | Return of the Jedi      | 6       | 25-05-1983 |
      | Revenge of the Sith     | 3       | 19-05-2005 |
