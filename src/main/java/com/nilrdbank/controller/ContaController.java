package com.nilrdbank.controller;

import com.nilrdbank.modelo.Conta;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.NumberFormat;
import java.util.Locale;

@RestController
@RequestMapping("/api/conta")
public class ContaController {

    @PostMapping("/criar")
    public ResponseEntity<String> criarConta(@RequestBody Conta conta) {
        // Criar um formatador de número para moeda
        NumberFormat formatador = NumberFormat.getCurrencyInstance(new Locale("pt", "BR"));

        // Formatar o saldo
        String saldoFormatado = formatador.format(conta.getSaldo());

        // Construir a resposta
        String resposta = "Olá " + conta.getNomeCliente() + ", obrigado por criar uma conta no Nilrd Bank. "
                + "Sua agência é " + conta.getAgencia() + ", conta " + conta.getNumero()
                + " e seu saldo de " + saldoFormatado + " está disponível para saque.";

        return ResponseEntity.ok(resposta);
    }

}
