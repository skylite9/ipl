const Pool = require('pg').Pool

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });

  // ipl_team_tbl -> team_id, team_name
  const getTeams = (request, response) => {
    pool.query('SELECT * FROM ipl_team_tbl ORDER BY team_id ASC', 
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  // ipl_player_role_tbl -> player_role_id, player_role
  const getPlayerRoleDetails = (request, response) => {
    pool.query('SELECT * FROM ipl_player_role_tbl ORDER BY player_role_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  // ipl_player_type_tbl -> player_type_id, player_type
  const getPlayerTypeDetails = (request, response) => {
    pool.query('SELECT * FROM ipl_player_type_tbl ORDER BY player_type_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  // ipl_player_nationality_tbl -> ipl_player_nationality_id, ipl_player_nationality
  const getPlayerNationalityDetails = (request, response) => {
    pool.query('SELECT * FROM ipl_player_nationality_tbl ORDER BY ipl_player_nationality_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  // Adds ipl_team_player_details_tbl ->
  // team_player_id, player_name, team_name, player_type,
  // player_role, player_nationality, player_rating
  const addPlayerDetails = (request, response) => {
    const { player_name, team_name , player_type, player_role, player_nationality, player_rating } = request.body;
    pool.query('INSERT INTO ipl_team_player_details_tbl (player_name, team_name , player_type, player_role, player_nationality, player_rating) '+
    ' VALUES ($1, $2, $3, $4, $5, $6) ', [player_name, team_name , player_type, player_role, player_nationality, player_rating], 
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User added with ID: ${results}`)
    })
  }
  // Gets ipl_team_player_details_tbl ->
  // team_player_id, player_name, team_name, player_type,
  // player_role, player_nationality, player_rating
  const getTeamsDetails = (request, response) => {
    const teamName = request.params.teamName;
    pool.query('SELECT * FROM ipl_team_player_details_tbl WHERE team_name = $1 ORDER BY team_player_id ASC', 
    [teamName], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  // To check wheter the user is an admin or not
  const checkAdminRights = (request, response) => {
      const secretCode = request.params.secretCode;
      if (parseInt(secretCode) === 8861) {
        response.status(200).json({'admin': true});
      } else {
        response.status(200).json({'admin': false});
      }
  }
  // Method to get the dashboard Teams stats
  const getTeamsStats = (request, response) => {
    pool.query('SELECT team_name, count(*) as player_count, avg(player_rating)' +
       ' FROM ipl_team_player_details_tbl GROUP BY team_name', 
    [teamName], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getTeams,
    getPlayerTypeDetails,
    getPlayerRoleDetails,
    getPlayerNationalityDetails,
    getTeamsDetails,
    addPlayerDetails,
    checkAdminRights,
    getTeamsStats
  }