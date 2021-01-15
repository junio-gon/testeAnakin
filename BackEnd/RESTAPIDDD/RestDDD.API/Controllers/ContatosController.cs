using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RestDDD.Application.DTOS;
using RestDDD.Application.Interfaces;

namespace RestDDD.API.Controllers
{
    //[Authorize]
    [Route("[controller]")]
    [ApiController]
    public class ContatosController : ControllerBase
    {
        /*public IActionResult Index()
        {
            return View();
        }*/
        private readonly IApplicationServiceContato _applicationServiceContato;


        public ContatosController(IApplicationServiceContato applicationServiceContato)
        {
            _applicationServiceContato = applicationServiceContato;
        }
        // GET api/values
        
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(_applicationServiceContato.GetAll());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return Ok(_applicationServiceContato.GetById(id));
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody] ContatoDTO contatoDTO)
        {
            try
            {
                if (contatoDTO == null)
                    return NotFound();

                _applicationServiceContato.Add(contatoDTO);
                return Ok("Contato cadastrado com sucesso!");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult Put([FromBody] ContatoDTO contatoDTO)
        {
            try
            {
                if (contatoDTO == null)
                    return NotFound();

                _applicationServiceContato.Update(contatoDTO);
                return Ok("Contato atualizado com sucesso!");
            }
            catch (Exception)
            {
                throw;
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        //adaptação para o Entity receber corretamente a requisição do Axios
        //public ActionResult Delete([FromBody] ContatoDTO contatoDTO)
        public ActionResult Delete(string id)
        {
            try
            {
                /*if (contatoDTO == null)
                    return NotFound();

                _applicationServiceContato.Remove(contatoDTO);*/

                _applicationServiceContato.Remove(Convert.ToInt32(id));
                return Ok("Contato removido com sucesso");
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
